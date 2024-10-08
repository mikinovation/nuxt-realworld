# Nuxt Realworld

## Setup

packageのインストール

```bash
npm install
```

DBのマイグレーション

```bash
npm run db:migrate
```

Seedデータの投入

```bash
npm run db:seed
```

## 開発サーバーの立ち上げ

```bash
npm run dev
```

## Drizzle Studioの立ち上げ

```bash
npm run db:studio
```

## 技術選定

- バック
    - DB
        - Postgres
    - ORM
        - drizzle
- フロント
    - Vue
        - Composition API
        - script setup
    - CSSは基本的にありものを使わせてもらう
        - CSSファイルから読みこみ
        - 実際のプロダクトではスコープドもしくは、TailwindCSS等のライブラリを利用する
- バック、フロント共通
    - Nuxt3(Nuxt4にアップデート予定)
        - APIサーバーを利用
        - サーバーコンポーネント
    - TypeScript
    - neverthrow
        - https://github.com/supermacro/neverthrow
        - 関数型プログラミングの考え方を取り入れてエラーハンドリングを行う
        - 基本的にフロント、バックエンドともに例外を投げないようにしたい
    - lint
        - Nuxt ESLint
        - FormatterにはESLint Stylistic(Prettier程強力なフォーマットのルールではない)