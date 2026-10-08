create or replace function public.is_agro_user()
returns boolean
language sql
stable
as $$
  select lower(coalesce(auth.jwt() ->> 'email', '')) like '%@agro.uba.ar'
$$;

insert into storage.buckets (id, name, public)
values ('plant-photos', 'plant-photos', true)
on conflict (id) do update set public = true;

alter table public.photo_records
  add column if not exists user_id uuid references auth.users(id) on delete cascade,
  add column if not exists plant_number integer,
  add column if not exists nombre_vulgar text;

create unique index if not exists photo_records_user_plant_number_key
  on public.photo_records (user_id, plant_number)
  where user_id is not null and plant_number is not null;

alter table public.quiz_sessions
  add column if not exists user_id uuid references auth.users(id) on delete cascade;

create table if not exists public.community_friends (
  owner_user_id uuid not null references auth.users(id) on delete cascade,
  friend_user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (owner_user_id, friend_user_id),
  constraint community_friends_not_self check (owner_user_id <> friend_user_id)
);

grant select, insert, delete
  on table public.community_friends
  to authenticated;

alter table public.photo_records enable row level security;
alter table public.quiz_sessions enable row level security;
alter table public.community_friends enable row level security;

drop policy if exists "photo_records_select_own" on public.photo_records;
drop policy if exists "photo_records_select_agro_users" on public.photo_records;
drop policy if exists "photo_records_insert_own" on public.photo_records;
drop policy if exists "photo_records_update_own" on public.photo_records;
drop policy if exists "photo_records_delete_own" on public.photo_records;

create policy "photo_records_select_agro_users"
  on public.photo_records
  for select
  to authenticated
  using (public.is_agro_user());

create policy "photo_records_insert_own"
  on public.photo_records
  for insert
  to authenticated
  with check (public.is_agro_user() and auth.uid() = user_id);

create policy "photo_records_update_own"
  on public.photo_records
  for update
  to authenticated
  using (public.is_agro_user() and auth.uid() = user_id)
  with check (public.is_agro_user() and auth.uid() = user_id);

create policy "photo_records_delete_own"
  on public.photo_records
  for delete
  to authenticated
  using (public.is_agro_user() and auth.uid() = user_id);

drop policy if exists "quiz_sessions_select_own" on public.quiz_sessions;
drop policy if exists "quiz_sessions_insert_own" on public.quiz_sessions;
drop policy if exists "community_friends_select_own" on public.community_friends;
drop policy if exists "community_friends_insert_own" on public.community_friends;
drop policy if exists "community_friends_delete_own" on public.community_friends;

create policy "quiz_sessions_select_own"
  on public.quiz_sessions
  for select
  to authenticated
  using (public.is_agro_user() and auth.uid() = user_id);

create policy "quiz_sessions_insert_own"
  on public.quiz_sessions
  for insert
  to authenticated
  with check (public.is_agro_user() and auth.uid() = user_id);

create policy "community_friends_select_own"
  on public.community_friends
  for select
  to authenticated
  using (public.is_agro_user() and auth.uid() = owner_user_id);

create policy "community_friends_insert_own"
  on public.community_friends
  for insert
  to authenticated
  with check (
    public.is_agro_user()
    and auth.uid() = owner_user_id
    and auth.uid() <> friend_user_id
  );

create policy "community_friends_delete_own"
  on public.community_friends
  for delete
  to authenticated
  using (public.is_agro_user() and auth.uid() = owner_user_id);

drop policy if exists "plant_photos_select_public" on storage.objects;
drop policy if exists "plant_photos_insert_own_folder" on storage.objects;
drop policy if exists "plant_photos_update_own_folder" on storage.objects;
drop policy if exists "plant_photos_delete_own_folder" on storage.objects;

create policy "plant_photos_select_public"
  on storage.objects
  for select
  using (bucket_id = 'plant-photos');

create policy "plant_photos_insert_own_folder"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'plant-photos'
    and public.is_agro_user()
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "plant_photos_update_own_folder"
  on storage.objects
  for update
  to authenticated
  using (
    bucket_id = 'plant-photos'
    and public.is_agro_user()
    and (storage.foldername(name))[1] = auth.uid()::text
  )
  with check (
    bucket_id = 'plant-photos'
    and public.is_agro_user()
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "plant_photos_delete_own_folder"
  on storage.objects
  for delete
  to authenticated
  using (
    bucket_id = 'plant-photos'
    and public.is_agro_user()
    and (storage.foldername(name))[1] = auth.uid()::text
  );
