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
