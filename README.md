This is a [Next.js](https://nextjs.org/) Templarte project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and configured further with [`Drizzle ORM`](https://orm.drizzle.team) and [`Turso`](https://turso.tech/).

## Getting Started

First, Sign-up on [`Turso`](https://accounts.turso.tech/sign-in?webui=true) and Create a Database.

Create a new `TOKEN` which will be used to connect to the database using drizzle orm.

Move `.env` to `.env.local` .

```bash
mv .env .env.local
```

Copy the `TOKEN` and `URL` displayed in the turso console and paste the values in `.env.local` file.

```bash
TURSO_DATABASE_URL=libsql://db-user.turso.io
TURSO_DATABASE_AUTH_TOKEN=SECURE_TOKEN_VALUE
```

## Setting up the Database

Install the dependencies

```bash
npm install
```

The template is already configured with a default table named `users`. To push the table in your database, run below commands in a terminal at root of the project

- below command will generate a folder `migrations` inside `db`

```bash
npm run db:generate
```

- below command will migrate the schema to your turso database

```bash
npm run db:migrate
```

- below command will seed the database with some initial values

```bash
npm run db:seed
```

**_NOTE:_** You can create new Tables Schema inside `db/schema.ts` and run above commands to migrate the new changes.

## Starting the Server

Now, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, Drrizle ORM, Turso take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Drizzle ORM](https://orm.drizzle.team/docs/overview) - Drizzle ORM documentation.
- [Turso Documentation](https://docs.turso.tech/introduction) - Turso documentation

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your This app is to use the [Vercel Platform](https://vercel.com/)

[![Vercel](https://camo.githubusercontent.com/b9ff564d8c311812747f1aacea54cf703d850756f9179f9eff6899da20a701a2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f76657263656c2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d76657263656c266c6f676f436f6c6f723d7768697465)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2FNavin-Jethwani-76%2Fnextjs-turso-drizzle-template&showOptionalTeamCreation=false)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
