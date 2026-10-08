create or replace function public.is_agro_user()
returns boolean
language sql
stable
as $$
  select lower(coalesce(auth.jwt() ->> 'email', '')) like '%@agro.uba.ar'
$$;

grant usage on schema public to anon, authenticated;

grant select, insert, update, delete
  on table public.photo_records
  to anon, authenticated;

grant select, insert
  on table public.quiz_sessions
  to anon, authenticated;

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

grant execute on function public.is_agro_user()
  to anon, authenticated;

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
