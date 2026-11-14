# Mes skills, agents, MCP et layout Herdr

Sauvegarde de ma configuration existante, importée le 13 novembre 2026.

- **764 skills** découverts par Skillshare, provenant des outils et plugins déjà installés. Une version active est conservée par skill et par outil distinct ; les autres versions restent dans la sauvegarde chiffrée.
- **66 agents** dans `agents/`. Les fichiers natifs d'origine sont aussi conservés dans `native/agents/`.
- **45 définitions MCP distinctes**, représentant 58 entrées configurées, dans `mcp-config/servers.yaml`. Leur provenance et leur état d'origine sont dans `inventory/mcp.json`.
- **106 plugins natifs recensés** : 69 Codex, 22 Claude et 15 Pi. Les installations existantes sont enregistrées dans Skillshare avec leur identité complète ; aucun plugin n'est réinstallé ou réactivé. Voir `inventory/plugins.json`.
- **4 groupes de hooks existants** : Claude `Notification`, `PreToolUse`, `Stop`, et Codex `Stop`. Les définitions et le script sont conservés dans `native/hooks/` ; l'import reprend les enregistrements en place sans ajouter de doublon.
- Le layout [Herdr + skillshare de runkids](https://herdr.dev/layouts/runkids/skillshare--herdr--skillshare/) et son panneau adapté à Windows sont dans `herdr/`.
- Une archive chiffrée préserve les **60 154 fichiers d'origine**, y compris les fichiers cachés, les configurations natives complètes et les valeurs sensibles. Aucun fichier d'origine sélectionné n'est écarté de cette archive.

## Utilisation sur ce PC

La configuration globale Skillshare utilise ce dépôt comme source de skills, `agents/` comme source d'agents et `mcp-config/servers.yaml` comme source MCP. Le panneau Herdr lit ces sources et le dépôt Git `samhanoun/skills`.

```powershell
skillshare status --json -g
skillshare list agents --json -g
skillshare mcp list --json -g
skillshare plugin list --json -g
skillshare hooks list --json -g
skillshare sync --dry-run -g
```

Les fichiers natifs des outils restent en place. Les connexions MCP importées ont `targets: []` : elles sont visibles dans le catalogue sans réactiver une connexion désactivée, remplacer l'authentification OAuth d'un plugin ou écraser une configuration client. Les outils continuent à utiliser leurs configurations natives existantes. Pour gérer une connexion avec Skillshare, sélectionner explicitement ses clients avec `skillshare mcp edit NOM --target CLIENT --no-tui`, prévisualiser `skillshare sync mcp --dry-run --json -g`, puis appliquer le plan choisi.

Le fichier Cursor `mcp.json` trouvé était vide ; son original est conservé dans l'archive. Les valeurs sensibles et les chaînes ressemblant à des clés sont remplacées par des références dans les copies publiques ; les octets d'origine sont tous conservés dans l'archive chiffrée.

### Plugins et hooks

Les reçus d'import des plugins sont locaux à ce PC. Le catalogue public conserve leur outil, leur identifiant natif, leur version et leur état connu. Les préfixes des noms Skillshare distinguent les paquets de clients ou de marketplaces différents, même s'ils ont le même nom. L'inventaire indique aussi les clients dont l'inspection native reste indisponible ; leurs installations ne sont pas modifiées.

Skillshare lisait auparavant un ancien CLI Codex intégré à une application et renvoyait une liste vide. La variable utilisateur locale `SKILLSHARE_CODEX_CLI` sélectionne maintenant le CLI npm 0.169.0. Le panneau Windows retrouve également cet exécutable de façon dynamique ; une variable déjà définie reste prioritaire.

Le panneau conserve la liste et le compteur des plugins pendant les vérifications natives lentes. Un cache local ne contient que les noms, les outils et les versions ; son statut reste non confirmé jusqu'au résultat du contrôle. Les contrôles natifs réussis sont réutilisés pendant deux minutes entre les rafraîchissements ordinaires. La commande `herdr-app do skillshare.plugins` ouvre directement cette liste.

Les hooks importés restent dans leurs fichiers natifs. Le fichier `native/hooks/entries.json` est une copie des définitions, à adapter au chemin personnel avant une migration vers un autre PC ; il n'est pas exécuté par ce dépôt. Les sept fichiers de réglages et de scripts natifs contrôlés sont identiques avant et après adoption. L'exécution et la confiance des hooks restent gérées par leurs clients ; aucun hook n'est déclenché pendant l'import.

Les réglages, registres et scripts avant et après l'import, ainsi que les reçus locaux après import, sont conservés dans `backup/plugins-hooks-2026-11-14/before/` et `after/`, chiffrés avec la même clé privée. Pour préparer leur restauration :

```powershell
node scripts/decrypt-backup.mjs "$env:USERPROFILE\.config\skills-backup\recovery-2026-11-13.key" "$env:TEMP\plugins-hooks-after.zip" backup/plugins-hooks-2026-11-14/after
python scripts/restore-originals.py "$env:TEMP\plugins-hooks-after.zip" "$env:TEMP\plugins-hooks-restored"
```

## Restauration complète

L'archive dans `backup/` est chiffrée avec **AES-256-GCM**, découpée en parties de 50 Mio maximum et accompagnée de sommes SHA-256. Son déchiffrement a été vérifié contre l'archive d'origine.

La clé est conservée uniquement sur le PC, dans :

```text
%USERPROFILE%\.config\skills-backup\recovery-2026-11-13.key
```

Conserver une copie privée de cette clé hors du PC : elle est indispensable à la restauration des originaux et ne doit pas être ajoutée à ce dépôt public.

```powershell
node scripts/decrypt-backup.mjs "$env:USERPROFILE\.config\skills-backup\recovery-2026-11-13.key" "$env:TEMP\skills-originals.zip"
python scripts/restore-originals.py "$env:TEMP\skills-originals.zip" "$env:TEMP\skills-restored"
```

La restauration écrit dans un nouveau dossier de préparation et ne remplace aucun fichier en cours d'utilisation. Le manifeste conserve chaque chemin sous le dossier personnel et le contenu exact de chaque fichier. Les liens de synchronisation peuvent ensuite être recréés avec Skillshare.

## Herdr

Le layout local correspond au layout public demandé. Le panneau conserve l'adaptation Windows : commandes locales exécutées via herdr-core, sans dépendre de l'ancien PATH de la fenêtre, et exécution compatible avec les tâches Windows. Le layout utilise les autres panneaux natifs fournis par Herdr.

```powershell
herdr-app check "$env:USERPROFILE\.config\herdr-app\mods\skillshare"
herdr-app do layout.switch --name herdr-skillshare
```

Les fichiers du layout et du panneau sont fournis à titre de sauvegarde ; préserver les personnalisations locales avant toute réinstallation.

## Vérification des doublons

Le catalogue actif est passé de 906 à **764 skills distincts**, sans nom en double. Après reprise des versions locales, 150 anciennes copies, variantes et éléments de corbeille ont été retirés avec la corbeille Skillshare. Toutes les versions précédentes et les dossiers locaux sont conservés dans la sauvegarde chiffrée `backup/before-dedup-2026-11-13/`. Le choix de chaque version et les noms clarifiés sont documentés dans `inventory/deduplication.json`.

Pour restaurer cette sauvegarde de contrôle, utiliser la même clé et préciser son dossier :

```powershell
node scripts/decrypt-backup.mjs "$env:USERPROFILE\.config\skills-backup\recovery-2026-11-13.key" "$env:TEMP\skills-before-dedup.zip" backup/before-dedup-2026-11-13
python scripts/restore-originals.py "$env:TEMP\skills-before-dedup.zip" "$env:TEMP\skills-before-dedup-restored"
```
