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

A campanha original permanece em `/`. As duas páginas adicionais ficam em `/campanha/lia-7f3b6a2e` e `/campanha/davi-9c4e8b71`, sem links entre elas ou listagem na página inicial. Lia e Davi são pseudônimos identificados nas próprias páginas. A pedido do organizador, ambas foram convertidas em simulações com nomes, relatos, metas, valores e contagens fictícios, identificados como demonstração em um aviso persistente e nos próprios indicadores.

As novas páginas e imagens recebem a diretiva `X-Robots-Tag: noindex`; as páginas também incluem a meta tag de não indexação. Isso orienta buscadores; não é autenticação. Quem conhece a URL pode acessá-la, e os caminhos também estão no código deste repositório público.

Os botões de doação das demonstrações estão desativados; não há checkout, Pix, captura de dados ou recebimento de pagamentos. O título e a descrição de compartilhamento identificam a simulação. Favoritos são locais e separados por página; as contagens de exemplo permanecem estáticas.

### Aparência das campanhas adicionais

As páginas adicionais reproduzem os estilos da página original como demonstração: fonte Lato, títulos, parágrafos, cores, largura de leitura, fotos, abas e barra fixa. O logotipo é uma referência visual da interface demonstrada; o aviso persistente e o rodapé informam que a simulação é independente e sem vínculo com a plataforma Vakinha. O selo indica modo de demonstração, sem afirmar proteção de pagamentos. A campanha original em `/` permanece inalterada.

Indicadores de exemplo: Lia — R$ 18.450,00 de R$ 90.000,00, 1.247 corações e 386 apoiadores; Davi — R$ 32.780,00 de R$ 90.000,00, 2.163 corações e 574 apoiadores. Todos são fictícios.
