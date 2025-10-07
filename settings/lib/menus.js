const menu = (prefix, NomeDoBot, sender, NickDono, isPremium) => {
return `╭─────〔 Menus 〕─────✧
│❖ ${prefix}Menudono
│❖ ${prefix}Menuadm
│❖ ${prefix}Menupremium
│❖ ${prefix}Efeitosimg
│❖ ${prefix}Logos
│❖ ${prefix}Menu+18
│❖ ${prefix}Download
│❖ ${prefix}Brincadeiras
│❖ ${prefix}Animes
│❖ ${prefix}Menufig
│❖ ${prefix}Menupesq
╰────────────────────╯

╭─────〔 Membros 〕─────✧
│❖ ${prefix}Infobot (Informações)
│❖ ${prefix}Idiomas (Gtts)
│❖ ${prefix}Carteira (Saldo disponível)
│❖ ${prefix}Bug (Questione/Erros) 
│❖ ${prefix}Infodono (Info do dono)
│❖ ${prefix}Sugestao (Dica/Sugestão)
│❖ ${prefix}Avalie (O quanto é bom) 
│❖ ${prefix}Infocmd (Comando) 
│❖ ${prefix}Infowelcome
│❖ ${prefix}Totalcmd
│❖ ${prefix}Dono
│❖ ${prefix}Criador
│❖ ${prefix}Ping (Velocidade/Up) 
│❖ ${prefix}Atividade (do Grupo)
│❖ ${prefix}Rankativo
│❖ ${prefix}Checkativo (@Marcar)
│❖ ${prefix}Ranklevel (do Grupo) 
╰────────────────────╯

╭─────〔 IA 〕─────✧
│❖ ${prefix}Corretor (Texto)
│❖ ${prefix}Bard (Pergunta)
│❖ ${prefix}Gpt (Texto)
│❖ ${prefix}Gptvoz (Texto)
│❖ ${prefix}Gptimg (Texto)
│❖ ${prefix}Redacao (Tema)
│❖ ${prefix}Summerize (Texto)
│❖ ${prefix}Imagine (Texto)
│❖ ${prefix}Totext (Texto)
╰────────────────────╯

╭─────〔 Noticias 〕─────✧
│❖ ${prefix}Getnoticias (Tema)
│❖ ${prefix}Cnnbrasil (Notícias)
│❖ ${prefix}Globo (Notícias)
│❖ ${prefix}Poder360 (Notícias)
│❖ ${prefix}Uol (Notícias)
│❖ ${prefix}Jovempan (Notícias)
│❖ ${prefix}Esportenews (Notícias)
│❖ ${prefix}Gamenews (Notícias)
│❖ ${prefix}Brasileirao (Tabela)
╰────────────────────╯

╭─────〔 Aleatorios 〕─────✧
│❖ ${prefix}Gtts (Idioma + Texto)
│❖ ${prefix}Tagme 
│❖ ${prefix}Emoji (😏/Whatsapp)
│❖ ${prefix}Emojimix (Emoji+Emoji)
│❖ ${prefix}Tabela (Letras/Simbolos) 
│❖ ${prefix}Conselhobiblico
│❖ ${prefix}Cantadas
│❖ ${prefix}Simi (Hable com ela)  
│❖ ${prefix}Perfil
│❖ ${prefix}Calcular (10 + 10)
│❖ ${prefix}Ringtone (Toque)
│❖ ${prefix}Fazernick (Oq deseja)
│❖ ${prefix}Ptvmsg (Mencione-V)
│❖ ${prefix}Traduzir (Palavra)
╰────────────────────╯`;
};
exports.menu = menu;

const adms = (prefix, sender) => { 
return `╭─────〔 Menu-Adm 〕─────✧
│❖ ${prefix}Antiimg (1/0)
│❖ ${prefix}Antivideo (1/0)
│❖ ${prefix}Antiaudio (1/0)
│❖ ${prefix}Antisticker (1/0)
│❖ ${prefix}Antiloc (1/0)
│❖ ${prefix}Anticontato (1/0)
│❖ ${prefix}Antidoc (1/0)
│❖ ${prefix}Antilinkgp (1/0)
│❖ ${prefix}Antilinkhard (1/0)
│❖ ${prefix}Antifake (1/0)
│❖ ${prefix}Antinotas (1/0)
│❖ ${prefix}Anticatalogo (1/0)
│❖ ${prefix}Antipalavrao (1/0)
│❖ ${prefix}Limitecaracteres (1/0)
│❖ ${prefix}Bemvindo (1/0)
│❖ ${prefix}Bemvindo2 (1/0)
│❖ ${prefix}Simih (1/0)
│❖ ${prefix}Simih2 (1/0)
│❖ ${prefix}Autosticker (1/0)
│❖ ${prefix}Autorepo (1/0)
│❖ ${prefix}Leveling (1/0)
│❖ ${prefix}Modonsfw (1/0)
│❖ ${prefix}Odelete (1/0)
│❖ ${prefix}x9visuunica (1/0)
│❖ ${prefix}x9 (1/0)
│❖ ${prefix}Legenda_imagem (Texto)
│❖ ${prefix}Legenda_video (Texto)
│❖ ${prefix}Legenda_estrangeiro (Texto)
│❖ ${prefix}Legendabv (Texto)
│❖ ${prefix}Legendasaiu (Texto)
│❖ ${prefix}Legendabv2 (Texto)
│❖ ${prefix}Legendasaiu2 (Texto)
│❖ ${prefix}So_adm
│❖ ${prefix}Requestgp -list
│❖ ${prefix}Requestgp -a numero
│❖ ${prefix}Requestgp -r numero
│❖ ${prefix}Fechar-gp
│❖ ${prefix}Listanegra (Número)
│❖ ${prefix}Tirardalista (Número)
│❖ ${prefix}ListanegraG (Número)
│❖ ${prefix}TirardalistaG (Número)
│❖ ${prefix}Multiprefixo (1/0)
│❖ ${prefix}Add_prefixo
│❖ ${prefix}Tirar_prefixo
│❖ ${prefix}Banghost
│❖ ${prefix}Mute (@mencionar)
│❖ ${prefix}Desmute (@mencionar)
│❖ ${prefix}Add 5511.. (Para-adicionar) 
│❖ ${prefix}Reviver (Responder-mensagem)
│❖ ${prefix}Kick [@] (Para-remover) 
│❖ ${prefix}Ban (Responder-mensagem)
│❖ ${prefix}Promover [@] (Ser-admin)
│❖ ${prefix}Rebaixar [@] (Rebaixar-adm)
│❖ ${prefix}Changegroup (all/adms)
│❖ ${prefix}Rmphotogp (Remover ft do gp)
│❖ ${prefix}Ephemeral [1/0] (Msg-temp)
│❖ ${prefix}Descgp (Texto)
│❖ ${prefix}Nomegp (Nome)
│❖ ${prefix}Totag (Mencionar algo)
│❖ ${prefix}Grupo (f/a)
│❖ ${prefix}Status
│❖ ${prefix}Limpar (texto-invisível-gp)
│❖ ${prefix}Atividades (DO-GRUPO)
│❖ ${prefix}Linkgp
│❖ ${prefix}Grupoinfo
│❖ ${prefix}Hidetag (txt) (marcação)
│❖ ${prefix}Marcar (marca tds do gp)
│❖ ${prefix}Marcar2 (Marca-tds-wa.me)
│❖ ${prefix}Anagrama (1/0)
│❖ ${prefix}Antipalavra (1/0)
│❖ ${prefix}Criartabela (Escreva-algo)
│❖ ${prefix}Tabelagp (Veja a tabela)
╰────────────────────╯`;
};
exports.adms = adms;

const menudono = (prefix, sender) => {
return `╭─────〔 Menu-Dono 〕─────✧
│❖ ${prefix}Bangp
│❖ ${prefix}Unbangp
│❖ ${prefix}Fotomenu (Marcar-img) 
│❖ ${prefix}Blockcmd (cmd)
│❖ ${prefix}Unblockcmd (cmd)
│❖ ${prefix}Cmdpremlist
│❖ ${prefix}Addcmdprem (cmd)
│❖ ${prefix}Delcmdprem (cmd)
│❖ ${prefix}Fundobemvindo (marcar-img)
│❖ ${prefix}Fundosaiu (marcar-img)
│❖ ${prefix}Serpremium
│❖ ${prefix}Listagp
│❖ ${prefix}Antipalavrão (1/0)
│❖ ${prefix}Antiligar (1/0)
│❖ ${prefix}Modoaluguel (1/0)
│❖ ${prefix}Fazertm (Texto)
│❖ ${prefix}Rgtm
│❖ ${prefix}Tirardatm
│❖ ${prefix}Listatm
│❖ ${prefix}Infocmd_add (cmd/texto) 
│❖ ${prefix}Infocmd_del (cmd) 
│❖ ${prefix}Visualizarmsg
│❖ ${prefix}Console (Logs no terminal)
│❖ ${prefix}Botoff (Funcionalidade do bot)
│❖ ${prefix}Boton (Funcionalidade do bot)
│❖ ${prefix}Verificado-global (Selos)
│❖ ${prefix}Audio-menu (Audio do menu)
│❖ ${prefix}Addpalavra (palavrão)
│❖ ${prefix}Delpalavra (palavrão)
│❖ ${prefix}Ativo
│❖ ${prefix}Rmpalavra_forca (palavra)
│❖ ${prefix}Addpalavras_forca (titulo|tema|dica)
│❖ ${prefix}Ausente (fale-oq-faz)
│❖ ${prefix}Delpremium @(marca)
│❖ ${prefix}Addpremium @(marca)
│❖ ${prefix}Privphotobot (all/cntt/ngm)
│❖ ${prefix}Privaddgroup (all/cntt/ngm)
│❖ ${prefix}Descriçãogp (digite-algo)
│❖ ${prefix}Block [@] (bloq de usar cmds) 
│❖ ${prefix}Unblock [@] (desbloquear) 
│❖ ${prefix}Setprefix (prefixo-novo)
│❖ ${prefix}Bcgp (TM-PRA-PV-MEMBROS)
╰────────────────────╯`;
};
exports.menudono = menudono;

const menulogos = (prefix, sender) => {
return `╭─────〔 Menu-Logos 〕─────✧
│❖ ${prefix}Efeitoneon (Texto)
│❖ ${prefix}Cemiterio (Texto)
│❖ ${prefix}Narutologo (Texto)
│❖ ${prefix}Narutologo2 (Texto)
│❖ ${prefix}Fire (Texto)
│❖ ${prefix}Romantic (Texto)
│❖ ${prefix}Smoke (Texto)
│❖ ${prefix}Papel (Texto)
│❖ ${prefix}Lovemsg (Texto)
│❖ ${prefix}Coffecup (Texto)
│❖ ${prefix}Cup (Texto)
│❖ ${prefix}Florwooden (Texto)
│❖ ${prefix}Lobometal (Texto)
│❖ ${prefix}Harryp (Texto)
│❖ ${prefix}Txtborboleta (Texto)
│❖ ${prefix}Madeira (Texto)
╰────────────────────╯`;
};
exports.menulogos = menulogos;

const alteradores = (prefix, sender) => {
return`╭─────〔 Alterar-Video 〕─────✧
│❖ ${prefix}Videolento (marca)
│❖ ${prefix}Videorapido (marca)
│❖ ${prefix}Videocontrario (marca)
╰────────────────────╯

╭─────〔 Alterar-Audio 〕─────✧
│❖ ${prefix}Audiolento (marca)
│❖ ${prefix}Audiorapido (marca)
│❖ ${prefix}Grave (marca)
│❖ ${prefix}Grave2 (marca)
│❖ ${prefix}Esquilo (marca)
│❖ ${prefix}Estourar (marca)
│❖ ${prefix}Bass (marca)
│❖ ${prefix}Bass2 (marca)
│❖ ${prefix}Vozmenino (marca)
╰────────────────────╯`;
};
exports.alteradores = alteradores;

const menuprem = (prefix, sender) => { 
return `╭─────〔 Menu-Premium 〕─────✧
│❖ ${prefix}Destrava
│❖ ${prefix}Destrava2
│❖ ${prefix}Ddd (DDD)
│❖ ${prefix}GerarCPF
│❖ ${prefix}PremiumList
│❖ ${prefix}Tinyurl (Link)
│❖ ${prefix}Cuttly (Link)
│❖ ${prefix}Bitly (Link)
│❖ ${prefix}Celular (Nome)
│❖ ${prefix}Scep (Número)
│❖ ${prefix}Cotacao (Moeda)
│❖ ${prefix}Sip (Número)
│❖ ${prefix}Igstalk (@usuário)
╰────────────────────╯

╭─────〔 Consultas 〕─────✧
│❖ ${prefix}Nome
│❖ ${prefix}Nome2
│❖ ${prefix}Cpf (Número)
│❖ ${prefix}Cpf2 (Número)
│❖ ${prefix}Cpf3 (Número)
│❖ ${prefix}Cpf4 (Número)
│❖ ${prefix}Tel (Número)
│❖ ${prefix}Tel2 (Número)
│❖ ${prefix}Tel3 (Número)
│❖ ${prefix}Parentes (Cpf)
│❖ ${prefix}Beneficios (Cpf)
│❖ ${prefix}Score (Cpf)
│❖ ${prefix}Placa (Placa)
│❖ ${prefix}Placa2 (Placa)
│❖ ${prefix}Cnpj (Número)
│❖ ${prefix}Site (Domínio)
│❖ ${prefix}Email 
│❖ ${prefix}Bin (Número)
│❖ ${prefix}Rg (Número)
╰────────────────────╯`;
};
exports.menuprem = menuprem;

const brincadeiras = (prefix, sender) => {
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭─────〔 Brincadeiras 〕─────✧
│❖ ${prefix}Jogodavelha (@Marcar) 
│❖ ${prefix}Anagrama (1/0)
│❖ ${prefix}Gartic (1/0)
│❖ ${prefix}Quizanimal (1/0)
│❖ ${prefix}Enigma (1/0)
│❖ ${prefix}R-forca (Letra)
│❖ ${prefix}Resetforca (Resetar)
│❖ ${prefix}Jogodaforca (Iniciar)
│❖ ${prefix}Vab (Você prefere?)
│❖ ${prefix}Eununca (Eu nunca, eu já)
│❖ ${prefix}Ppt (Pedra/Papel/Tesoura) 
│❖ ${prefix}Cassino
│❖ ${prefix}Minerar
│❖ ${prefix}Apostar (Valor)
│❖ ${prefix}Pescar
│❖ ${prefix}Churrasco
│❖ ${prefix}Steal (marca (@))
│❖ ${prefix}1xbcbets (Valor)
│❖ ${prefix}Hackear (marca (@))
│❖ ${prefix}Mina (coordenada(s))
│❖ ${prefix}Minado (dificuldade)
│❖ ${prefix}Minareset (resetar)
│❖ ${prefix}Mineshelp (info)
│❖ ${prefix}Minatips (dicas)
│❖ ${prefix}Akinator (iniciar jogo)
│❖ ${prefix}Respaki (0/1/2/3/4)
│❖ ${prefix}Finaki (sim ou não)
│❖ ${prefix}Resetaki (resetar akinator)
╰────────────────────╯

╭─────〔 Zoeiras 〕─────✧
│❖ ${prefix}Gay (marca (@))
│❖ ${prefix}Feio (marca (@))
│❖ ${prefix}Corno (marca (@))
│❖ ${prefix}Vesgo (marca (@))
│❖ ${prefix}Bebado (marca (@))
│❖ ${prefix}Gostoso (marca (@))
│❖ ${prefix}Gostosa (marca (@))
│❖ ${prefix}Beijo (marca (@))
│❖ ${prefix}Matar (marca (@))
│❖ ${prefix}Tapa (marca (@))
│❖ ${prefix}Cu (marca (@))
│❖ ${prefix}Louca (marca (@))
│❖ ${prefix}Mamar (marca (@))
│❖ ${prefix}Boquete (marca (@))
│❖ ${prefix}Fuder (marca (@))
│❖ ${prefix}Gozar (marca (@))
│❖ ${prefix}Estrupar (marca (@))
│❖ ${prefix}Sexo (marca (@))
│❖ ${prefix}Pgpau (marca (@))
│❖ ${prefix}Pgbunda (marca (@))
│❖ ${prefix}Chute (marca (@))
│❖ ${prefix}Dogolpe (marca (@))   
│❖ ${prefix}Nazista (marca (@))
│❖ ${prefix}Chance (fale algo) 
│❖ ${prefix}Surubao (Quantidade) 
│❖ ${prefix}Casal (Casal do grupo)
│❖ ${prefix}Quando (Perguntar)
│❖ ${prefix}Rankgay (5 gays)
│❖ ${prefix}Rankgado (5 gados)
│❖ ${prefix}Rankcorno (5 cornos)
│❖ ${prefix}Rankgostoso (5 gostosos)
│❖ ${prefix}Rankgostosa (5 gostosas)
│❖ ${prefix}Ranknazista (5 nazistas)
│❖ ${prefix}Rankotakus (5 otakus)
│❖ ${prefix}Rankpau (5 pauzudos)
│❖ ${prefix}Rankbct (5 bucetudas)
│❖ ${prefix}Rankbunda (5 bundudos(as))
│❖ ${prefix}Rank (fale algo)
│❖ ${prefix}Mencionar (fale algo)
│❖ ${prefix}Death (Nome)
╰────────────────────╯`;
};
exports.brincadeiras = brincadeiras;

const efeitos = (prefix, sender) => {
return `╭─────〔 Menu-Efeitos 〕─────✧
│❖ ${prefix}Comunismo (marcar)-(img)
│❖ ${prefix}Bolsonaro (marcar)-(img)
│❖ ${prefix}Bnw (marcar)-(img)
│❖ ${prefix}Beautiful (marcar)-(img)
│❖ ${prefix}Blur (marcar)-(img)
│❖ ${prefix}Affect (marcar)-(img)
│❖ ${prefix}Del (marcar)-(img)
│❖ ${prefix}Circle (marcar)-(img)
│❖ ${prefix}Beautiful (marcar)-(img)
│❖ ${prefix}Dither (marcar)-(img)
│❖ ${prefix}Facepalm (marcar)-(img)
│❖ ${prefix}Invert (marcar)-(img)
│❖ ${prefix}Lgbt (marcar)-(img)
│❖ ${prefix}Magik (marcar)-(img)
│❖ ${prefix}Rotate (marcar)-(img)
│❖ ${prefix}Rip (marcar)-(img)
│❖ ${prefix}Jail (marcar)-(img)
│❖ ${prefix}Trash (marcar)-(img)
│❖ ${prefix}Pixelate (marcar)-(img)
│❖ ${prefix}Sepia (marcar)-(img)
│❖ ${prefix}Wanted (marcar)-(img) 
│❖ ${prefix}Wasted (marcar)-(img) 
│❖ ${prefix}Animeia (marcar)-(img)
│❖ ${prefix}Zombieia (marcar)-(img)
╰────────────────────╯`;
};
exports.efeitos = efeitos;

const animes = (prefix, sender) => {
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭─────〔 Edits-Anime 〕─────✧
│ ${prefix}Editanime -random
│ ${prefix}Editanime -bleach
│ ${prefix}Editanime -chainsaw
│ ${prefix}Editanime -dragonball
│ ${prefix}Editanime -kimetsu
│ ${prefix}Editanime -jujutsu
│ ${prefix}Editanime -naruto
╰────────────────────╯

╭─────〔 Anime-images 〕─────✧
│ ${prefix}Animeimage -cosplay
│ ${prefix}Animeimage -waifu
│ ${prefix}Animeimage -loli
│ ${prefix}Animeimage -shota
│ ${prefix}Animeimage -shinomiya
│ ${prefix}Animeimage -yotsuba
│ ${prefix}Animeimage -yumeko
│ ${prefix}Animeimage -tejina
│ ${prefix}Animeimage -chiho
│ ${prefix}Animeimage -kaori
│ ${prefix}Animeimage -boruto
│ ${prefix}Animeimage -shizuka
│ ${prefix}Animeimage -kaga
│ ${prefix}Animeimage -kotori
│ ${prefix}Animeimage -mikasa
│ ${prefix}Animeimage -akiyama
│ ${prefix}Animeimage -gremory
│ ${prefix}Animeimage -izuku
│ ${prefix}Animeimage -shina
│ ${prefix}Animeimage -shinka
│ ${prefix}Animeimage -yuri
│ ${prefix}Animeimage -eba
│ ${prefix}Animeimage -erza
│ ${prefix}Animeimage -elaina
│ ${prefix}Animeimage -hinata
│ ${prefix}Animeimage -naruto
│ ${prefix}Animeimage -minato
│ ${prefix}Animeimage -sagari
│ ${prefix}Animeimage -nezuko
│ ${prefix}Animeimage -rize
│ ${prefix}Animeimage -anna
│ ${prefix}Animeimage -deidara
│ ${prefix}Animeimage -asuna
│ ${prefix}Animeimage -ayuzawa
│ ${prefix}Animeimage -emilia
│ ${prefix}Animeimage -chitoge
│ ${prefix}Animeimage -hestia
│ ${prefix}Animeimage -inori
│ ${prefix}Animeimage -itachi
│ ${prefix}Animeimage -madara
│ ${prefix}Animeimage -sakura
│ ${prefix}Animeimage -sasuke
│ ${prefix}Animeimage -tsunade
│ ${prefix}Animeimage -onepiece
│ ${prefix}Animeimage -mobil
│ ${prefix}Animeimage -montor
│ ${prefix}Animeimage -keneki
│ ${prefix}Animeimage -megumin
│ ${prefix}Animeimage -toukachan
╰────────────────────╯`;
};
exports.animes = animes;

const menudown = (prefix, sender) => {
return`╭─────〔 Menu-Downloads 〕─────✧
│❖ ${prefix}Play (Nome)
│❖ ${prefix}Play2 (Nome)
│❖ ${prefix}Play3 (Nome)
│❖ ${prefix}Playvid (Nome)
│❖ ${prefix}Playvid2 (Nome)
│❖ ${prefix}Playvid3 (Nome)
│❖ ${prefix}Playdoc (Nome)
│❖ ${prefix}Playdoc2 (Nome)
│❖ ${prefix}Playmix (Nome)
│❖ ${prefix}Ytmp3 (Link)
│❖ ${prefix}Ytmp4 (Link)
│❖ ${prefix}Shazam (Mencionar-aud)
│❖ ${prefix}Audiomeme (Nome)
│❖ ${prefix}Audiomeme2 (Nome)
│❖ ${prefix}Tiktok (Link) 
│❖ ${prefix}Tiktokaudio (Link)
│❖ ${prefix}Tiktokimg (Link)
│❖ ${prefix}Instagram (Link) 
│❖ ${prefix}Instaaudio (Link) 
│❖ ${prefix}Instastory (@Usuário) 
│❖ ${prefix}Instareels (Link)
│❖ ${prefix}Threads (Link)
│❖ ${prefix}Twitter (Link)
│❖ ${prefix}Multidl (Link)
│❖ ${prefix}Deezer (Nome) 
│❖ ${prefix}Soundcloud (Link)
│❖ ${prefix}Kwaivideo (Link)
│❖ ${prefix}Mediafire (Link)
│❖ ${prefix}Googledrive (Link)
│❖ ${prefix}Imgpralink (Marcar-img)
│❖ ${prefix}Videopralink (Marcar-vid)
│❖ ${prefix}Gerarlink (img/vid)
│❖ ${prefix}Gerarlink2 (Marcar-algo)
╰────────────────────╯`;
};
exports.menudown = menudown;

const menufigu = (prefix, sender) => {
return`╭─────〔 Menu-Figurinhas 〕─────✧
│❖ ${prefix}Ttp (Seu texto)
│❖ ${prefix}Fsticker (Marcar-foto)
│❖ ${prefix}Sticker (Marcar-foto)
│❖ ${prefix}Toimg (Marcar-sticker)
│❖ ${prefix}Attp (Seu texto)
│❖ ${prefix}Togif (Marcar-sticker)
│❖ ${prefix}Roubar (Texto/Texto)
│❖ ${prefix}Figurinhas (Quantidade)
│❖ ${prefix}Figumemes (Quantidade)
│❖ ${prefix}Figuflork (Quantidade)
│❖ ${prefix}Figuemoji (Quantidade)
│❖ ${prefix}Figucoreana (Quantidade)
│❖ ${prefix}Figubebe (Quantidade)
│❖ ${prefix}Figuanime (Quantidade)
│❖ ${prefix}Figufunny (Quantidade)
│❖ ${prefix}Figuanimais (Quantidade)
│❖ ${prefix}Figudesenho (Quantidade)
│❖ ${prefix}Figuraiva (Quantidade)
│❖ ${prefix}Figuroblox (Quantidade)
│❖ ${prefix}Qc (Mensagem desejada)
│❖ ${prefix}Figaleatoria
╰────────────────────╯`;
};
exports.menufigu = menufigu;

const menupesq = (prefix, sender) => {
return`╭─────〔 Pesquisas 〕─────✧
│❖ ${prefix}Nerding (Nome) 
│❖ ${prefix}Pensador (Nome) 
│❖ ${prefix}Nasa (Ex: 19-10-2007)
│❖ ${prefix}Clima (Cidade)
│❖ ${prefix}Book (Nome do Livro)
│❖ ${prefix}Movie (Nome do Filme)
│❖ ${prefix}Movie2 (Nome do Filme)
│❖ ${prefix}Imdb (Nome do Filme)
│❖ ${prefix}Imdbinfo (Link do Filme)
│❖ ${prefix}Animetv (Nome do Anime)
│❖ ${prefix}Serie (Nome da Série)
│❖ ${prefix}Lyrics (Música) 
│❖ ${prefix}Playstore (Nome) 
│❖ ${prefix}Aptoide (Nome)
│❖ ${prefix}Signo (Signo) 
│❖ ${prefix}Amazon (Nome) 
│❖ ${prefix}Googlesrc (Nome)
│❖ ${prefix}Memedroid
│❖ ${prefix}iFunnyvideo
│❖ ${prefix}Americanas (Nome)
│❖ ${prefix}Submarino (Nome)
│❖ ${prefix}Wikipedia (Nome) 
│❖ ${prefix}Pinterest (Nome) 
│❖ ${prefix}Pinterest2 (Nome) 
│❖ ${prefix}Gimage (Nome) 
│❖ ${prefix}Dicionario (Palavra) 
│❖ ${prefix}Ytplaylist (Link)
│❖ ${prefix}Ytsearch (Nome)
│❖ ${prefix}Games (Nome)
╰────────────────────╯`;
};
exports.menupesq = menupesq;

const adulto = (prefix, sender) => {
return`╭─────〔 Menu+18 〕─────✧
│❖ Seja Bem-Vindo ao Menu+18!
╰────────────────────
╭─────〔 Plaquinhas 〕─────✧
│❖ ${prefix}Plaq1 (Texto)
│❖ ${prefix}Plaq2 (Texto)
│❖ ${prefix}Plaq3 (Texto)
│❖ ${prefix}Plaq4 (Texto)
│❖ ${prefix}Plaq5 (Texto)
│❖ ${prefix}Plaq6 (Texto)
│❖ ${prefix}Plaq7 (Texto)
│❖ ${prefix}Plaq8 (Texto)
│❖ ${prefix}Plaq9 (Texto)
╰─────────────────────
╭─────〔 Videos+18 〕─────✧
│❖ ${prefix}Hentai (Envia PV)
╰─────────────────────`;
};
exports.adulto = adulto;
