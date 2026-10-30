-- Migra las sesiones historicas utiles y elimina dos residuos sin informacion
-- recuperable antes de retirar el catalogo de la primera edicion.

begin;

do $$
declare
  migrated_sessions integer;
  deleted_generic_sessions integer;
  deleted_orphan_records integer;
  remaining_legacy_records integer;
  remaining_legacy_sessions integer;
begin
  update public.quiz_sessions sessions
  set final_especie_id = migrations.new_species_id
  from (
    values
      ('cerastium_viscosum', 'ed2_cerastium_glomeratum'),
      ('ephedra_triandra', 'ed2_ephedra_triandra'),
      ('ephedra_tweediana', 'ed2_ephedra_tweediana'),
      ('marsilia_concinna', 'ed2_marsilea_concinna'),
      ('matricaria_chamomilla', 'ed2_matricaria_chamomilla'),
      ('oxalis_articulata', 'ed2_oxalis_articulata'),
      ('pilularia_mandonii', 'ed2_pilularia_mandonii')
  ) as migrations(old_species_id, new_species_id)
  where sessions.final_especie_id = migrations.old_species_id;

  get diagnostics migrated_sessions = row_count;
  if migrated_sessions <> 7 then
    raise exception
      'Se esperaban 7 sesiones migrables y se encontraron %.',
      migrated_sessions;
  end if;

  delete from public.quiz_sessions
  where final_especie_id = 'bignoniaceae';

  get diagnostics deleted_generic_sessions = row_count;
  if deleted_generic_sessions <> 1 then
    raise exception
      'Se esperaba 1 sesion generica de Bignoniaceae y se encontraron %.',
      deleted_generic_sessions;
  end if;

  delete from public.photo_records
  where user_id is null
    and plant_number is null
    and especie_id = 'cocos_nucifera';

  get diagnostics deleted_orphan_records = row_count;
  if deleted_orphan_records <> 1 then
    raise exception
      'Se esperaba 1 registro huerfano de Cocos nucifera y se encontraron %.',
      deleted_orphan_records;
  end if;

  select count(*)
  into remaining_legacy_records
  from public.photo_records
  where especie_id not like 'ed2_%';

  select count(*)
  into remaining_legacy_sessions
  from public.quiz_sessions
  where final_especie_id is not null
    and final_especie_id not like 'ed2_%';

  if remaining_legacy_records <> 0 or remaining_legacy_sessions <> 0 then
    raise exception
      'Quedaron % plantas y % sesiones con identificadores historicos.',
      remaining_legacy_records,
      remaining_legacy_sessions;
  end if;
end
$$;

commit;

select jsonb_build_object(
  'plantas_historicas', (
    select count(*)
    from public.photo_records
    where especie_id not like 'ed2_%'
  ),
  'sesiones_historicas', (
    select count(*)
    from public.quiz_sessions
    where final_especie_id is not null
      and final_especie_id not like 'ed2_%'
  )
) as resultado;
