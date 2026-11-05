# Movidos por amor — reprodução

Cópia estática da página https://movidosporamor.online/ajudeporfavor/.

Os arquivos para hospedagem estão em `dist/`.

Inclui HTML, CSS, vídeo, fontes Lato e favicon locais. Mantém o layout responsivo e os comportamentos originais de favorito, áudio e compartilhamento. O botão de contribuição mantém o endereço externo do original; não há processamento de pagamentos nesta cópia. As abas e os números permanecem estáticos, como no código original. Scripts de publicidade e rastreamento de terceiros foram removidos.

Verificação: sintaxe JavaScript e presença dos arquivos locais. A comparação visual em navegador não foi realizada porque a integração de navegador não está disponível neste ambiente.

## Executar localmente

```sh
python3 -m http.server 8000 --directory dist
```

Abra http://localhost:8000. Para hospedar, use `dist/` como diretório público; não há etapa de build.
