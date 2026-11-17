# Movidos por amor — reprodução

Cópia estática da página https://movidosporamor.online/ajudeporfavor/.

Os arquivos para hospedagem estão em `dist/`.

Inclui HTML, CSS, vídeo, fontes Lato e favicon locais. Mantém o layout responsivo e os comportamentos originais de favorito, áudio e compartilhamento. O botão de contribuição mantém o endereço externo do original; não há processamento de pagamentos nesta cópia. As abas e os números permanecem estáticos, como no código original. Scripts de publicidade e rastreamento de terceiros foram removidos.

Verificação: páginas adicionais testadas em Chromium a 320, 390 e 1440 pixels de largura, incluindo imagens, favoritos independentes, persistência local, compartilhamento e alternativa de cópia manual. A página original foi preservada e conferida sem links para as novas campanhas.

## Executar localmente

```sh
python3 -m http.server 8000 --directory dist
```

Abra http://localhost:8000. Para hospedar, use `dist/` como diretório público; não há etapa de build.

## Deploy na Vercel

O arquivo `vercel.json` configura a publicação estática da pasta `dist/`, sem instalação de dependências ou etapa de build.

Importe o repositório mantendo **Root Directory** na raiz do repositório (vazio ou `.`). A configuração versionada define **Framework Preset: Other**, **Output Directory: dist** e os comandos vazios. Alterações na branch de produção geram um novo deploy quando a integração Git está ativa.

## Campanhas adicionais

A campanha original permanece em `/`. As duas páginas adicionais ficam em `/campanha/lia-7f3b6a2e` e `/campanha/davi-9c4e8b71`, sem links entre elas ou listagem na página inicial. Lia e Davi são pseudônimos identificados nas próprias páginas. As novas páginas não exibem números de doadores, valores arrecadados ou metas sem dados fornecidos pelo organizador.

As novas páginas e imagens recebem a diretiva `X-Robots-Tag: noindex`; as páginas também incluem a meta tag de não indexação. Isso orienta buscadores; não é autenticação. Quem conhece a URL pode acessá-la, e os caminhos também estão no código deste repositório público.

Os botões de doação das novas páginas aguardam os respectivos links do organizador. Para ativar uma campanha, substitua o botão desabilitado `.btn-donate` por um link com o endereço de doação correspondente e atualize a mensagem `#donation-status`. Não reutilize automaticamente o checkout da campanha original. Favoritos são locais e separados por campanha; compartilhamento usa a URL da página atual.
