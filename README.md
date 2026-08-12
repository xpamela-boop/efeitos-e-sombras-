# 🚀 Projeto: Cards Interativos com Hover e Modo Escuro

Este projeto apresenta um conjunto de cartões de postagem (`<article>`) responsivos e estilizados utilizando CSS moderno, propriedades de transição, transformações dinâmicas e suporte nativo a temas escuros.

---

## 📑 Funcionalidades
* **Elevação Suave**: Uso de `transform: scale(1.02)` ao passar o mouse.
* **Profundidade Adaptativa**: Sombras (`box-shadow`) que ganham intensidade no hover.
* **Modo Escuro (Dark Mode)**: Detecção automática do sistema com `prefers-color-scheme`, ajustando o brilho e as cores das sombras para manter o destaque.

---

## ❓ Perguntas de Fixação

### 1. Por que usamos a propriedade `transition` no elemento base (`article`) e não no `:hover`?
**Resposta:** Adicionar a propriedade `transition` no selector base garante que a animação aconteça suavemente **tanto na entrada** (quando o mouse passa por cima) **quanto na saída** (quando o mouse sai do elemento). Se colocarmos apenas no `:hover`, o efeito de saída será brusco.

### 2. Qual a função do parâmetro `rgba()` na propriedade `box-shadow`?
**Resposta:** O formato `rgba(R, G, B, A)` permite definir a cor através dos canais Vermelho, Verde e Azul, além de definir o canal **Alpha (transparência)**. Isso possibilita criar sombras suaves e semitransparentes que se misturam naturalmente ao fundo.

---

## 🏆 Desafios para Praticar

1. **Desafio 1: Adicionar Bordas Brilhantes no Modo Escuro**
   * Modifique o CSS do modo escuro para que, além da sombra azul, o cartão receba uma borda sutil (`border: 1px solid rgba(82, 168, 236, 0.5)`) quando o mouse estiver sobre ele.

2. **Desafio 2: Animar um Botão Interno**
   * Coloque um botão dentro do `<article>` e faça com que ele mude de cor de fundo apenas quando o cartão inteiro receber o `:hover` (Dica: use `article:hover button`).

3. **Desafio 3: Suporte Manual a Temas**
   * Crie uma classe `.dark-mode` no CSS para que o usuário possa alternar entre temas usando um botão JavaScript, além de manter o `@media (prefers-color-scheme: dark)`.
