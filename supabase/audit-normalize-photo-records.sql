-- Audita y normaliza los campos historicos que photo_records guarda como texto.
-- Los nombres cientificos y sus autores no necesitan migracion: la aplicacion
-- los obtiene del catalogo actual mediante especie_id.
--
-- Este script conserva todos los nombres vulgares personalizados. Solo elimina
-- valores vacios y el antiguo marcador "Sin nombre vulgar", para que la
-- aplicacion use el nombre vigente del catalogo o muestre ese mensaje.

begin;

create temporary table photo_records_audit_before on commit preserve rows as
select 'records_without_user'::text as issue, count(*)::bigint as affected
from public.photo_records
where user_id is null
union all
select 'records_without_profile', count(*)
from public.photo_records records
left join public.user_profiles profiles on profiles.user_id = records.user_id
where records.user_id is not null and profiles.user_id is null
union all
select 'collector_name_out_of_sync', count(*)
from public.photo_records records
join public.user_profiles profiles on profiles.user_id = records.user_id
where trim(records.nombre_usuario) is distinct from trim(profiles.display_name)
union all
select 'common_name_placeholder_or_blank', count(*)
from public.photo_records
where trim(coalesce(nombre_vulgar, '')) = ''
   or lower(trim(nombre_vulgar)) = 'sin nombre vulgar'
union all
select 'records_without_species_id', count(*)
from public.photo_records
where trim(coalesce(especie_id, '')) = '';

update public.photo_records records
set nombre_usuario = trim(profiles.display_name)
from public.user_profiles profiles
where profiles.user_id = records.user_id
  and trim(records.nombre_usuario) is distinct from trim(profiles.display_name)
  and trim(profiles.display_name) <> '';

update public.photo_records
set nombre_vulgar = null
where trim(coalesce(nombre_vulgar, '')) = ''
   or lower(trim(nombre_vulgar)) = 'sin nombre vulgar';

commit;

select issue, affected
from photo_records_audit_before
order by issue;
