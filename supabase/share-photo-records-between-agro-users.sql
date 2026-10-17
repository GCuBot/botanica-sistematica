drop policy if exists "photo_records_select_own" on public.photo_records;
drop policy if exists "photo_records_select_agro_users" on public.photo_records;

create policy "photo_records_select_agro_users"
  on public.photo_records
  for select
  to authenticated
  using (public.is_agro_user());

create table if not exists public.user_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  is_visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant select, insert, update
  on table public.user_profiles
  to authenticated;

alter table public.user_profiles enable row level security;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists user_profiles_set_updated_at on public.user_profiles;

create trigger user_profiles_set_updated_at
  before update on public.user_profiles
  for each row
  execute function public.set_updated_at();

drop policy if exists "user_profiles_select_visible_agro" on public.user_profiles;
drop policy if exists "user_profiles_insert_own" on public.user_profiles;
drop policy if exists "user_profiles_update_own" on public.user_profiles;

create policy "user_profiles_select_visible_agro"
  on public.user_profiles
  for select
  to authenticated
  using (public.is_agro_user() and (is_visible or auth.uid() = user_id));

create policy "user_profiles_insert_own"
  on public.user_profiles
  for insert
  to authenticated
  with check (public.is_agro_user() and auth.uid() = user_id);

create policy "user_profiles_update_own"
  on public.user_profiles
  for update
  to authenticated
  using (public.is_agro_user() and auth.uid() = user_id)
  with check (public.is_agro_user() and auth.uid() = user_id);

insert into public.user_profiles (user_id, display_name)
select
  user_id,
  coalesce(nullif(trim(max(nombre_usuario)), ''), 'Sin nombre')
from public.photo_records
where user_id is not null
group by user_id
on conflict (user_id) do nothing;

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

alter table public.community_friends enable row level security;

drop policy if exists "community_friends_select_own" on public.community_friends;
drop policy if exists "community_friends_insert_own" on public.community_friends;
drop policy if exists "community_friends_delete_own" on public.community_friends;

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
