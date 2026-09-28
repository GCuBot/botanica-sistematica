alter table public.photo_records
  add column if not exists is_confirmed boolean not null default false;

comment on column public.photo_records.is_confirmed is
  'Indica que la identificacion del registro fue confirmada por el usuario.';
