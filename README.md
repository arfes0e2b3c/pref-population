## 都道府県人口統計サイト

都道府県別で人口の推移を確認することができるWebサイトです。

[実際のアプリ](https://pref-population.vercel.app/)

### 導入方法

1. `git clone`
2. `npm install`
3. ルートディレクトリに.env.localを作成し、以下の項目を追加してください
  > NEXT_PUBLIC_RESAS_API_KEY=[RESASのAPIキー]
  >
  > NEXT_PUBLIC_RESAS_BASE_URL=https://opendata.resas-portal.go.jp/api/v1
4. `npm run dev`
5. http://localhost:3000 にアクセス

### 使用技術

#### ・Next.js
実際にインターンで使用するのがNext.jsだということに加え、今まで自分が触れてこなかったので挑戦という意味も込めて選択しました。ReactではなくNextを選択した理由としては短い期間で本質的な開発に注力するためにはNextを選択するべきだと考えたからです。

#### ・TypeScript
型安全に開発することができるので選択しました。

#### ・vanilla-extract
css-in-jsについてはいくつか候補(styled-components, tailwind)はありましたが、HTML部分の可読性や型安全性や定義参照などのDXの点で優れていると感じたため選択しました。

#### ・Jest/React-Testing-Library
特に他に候補がない様に思われたので特に選択理由はありません。

#### ・Vercel
Nextとの親和性や自動デプロイが魅力的だと感じたので選択しました

#### ・github
選択理由は特にありません。機能ごとにブランチを切ってmainブランチにマージするという流れで開発を行いました。

#### ・Recharts.js
コンポーネントとしてimportできるのでJSベースでインポートする必要があるhighchartより使い勝手が良かったのと、UIの綺麗さで選択しました。

### 候補だった技術

#### ・react-query/swr
データフェッチやグローバルな状態管理で利用しようかと考えたのですが規模的にあまり必要性が感じられなかったので使用を諦めました。

### デザインパターン

#### ・TreeDesign
最初はatomic designが候補にありましたが、①今回の規模の開発でmoleclesやorganismを分けられる自信がなく、また分ける必要性を感じなかったこと ②DOMに即したディレクトリ構成にすることでより直感と合った開発をすることができる、という２点からTreeDesignを採用しています。
