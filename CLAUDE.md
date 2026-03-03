# CLAUDE.md — vibe-launch

## プロジェクト概要
Vibe Launch — 学習コンテンツ付きランディングページ（Markdownベース）

## 技術スタック
- Next.js 16 (App Router) / React 19 / TypeScript 5
- TailwindCSS v4
- gray-matter（Markdownコンテンツ管理）
- デプロイ: Vercel

## ディレクトリ構成
- `app/` — App Router ページ（**src/ なし**）
- `components/` — React コンポーネント
- `content/lessons/` — Markdown 学習コンテンツ
- `lib/` — ユーティリティ
- `middleware.ts` — Basic認証

## 注意事項
- **`src/` ディレクトリなし** — パスエイリアス `@/*` はルート `./*` にマッピング
- コンテンツは `content/lessons/` 配下の Markdown ファイル（gray-matter でパース）
- Basic認証は環境変数（`BASIC_AUTH_USER`, `BASIC_AUTH_PASSWORD`）で管理

## タスク管理
- `TASKS.md` がこのプロジェクトのタスク原本
