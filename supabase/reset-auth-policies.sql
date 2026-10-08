do $$
declare
  policy_record record;
begin
  for policy_record in
    select policyname
    from pg_policies
    where schemaname = 'public'
      and tablename = 'photo_records'
  loop
    execute format(
      'drop policy if exists %I on public.photo_records',
      policy_record.policyname
    );
  end loop;

  for policy_record in
    select policyname
    from pg_policies
    where schemaname = 'public'
      and tablename = 'quiz_sessions'
  loop
    execute format(
      'drop policy if exists %I on public.quiz_sessions',
      policy_record.policyname
    );
  end loop;

  for policy_record in
    select policyname
    from pg_policies
    where schemaname = 'public'
      and tablename = 'community_friends'
  loop
    execute format(
      'drop policy if exists %I on public.community_friends',
      policy_record.policyname
    );
  end loop;
end $$;

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
