# lief_project

## 🚀 Overview

Lief_project is a comprehensive Next.js application built with TypeScript, designed to manage and monitor staff activities, attendance, and performance. It leverages modern technologies like Apollo Server for GraphQL, Prisma for database management, and Ant Design for a sleek UI. This project is ideal for healthcare facilities, educational institutions, and any organization needing robust staff management solutions.

## ✨ Features

- **Staff Management:** Easily manage staff profiles, roles, and statuses.
- **Attendance Tracking:** Monitor staff clock-ins and clock-outs with real-time updates.
- **Performance Analytics:** Gain insights into staff performance and attendance trends.
- **Geofencing:** Set up geofences to monitor staff locations and perimeter breaches.
- **Authentication:** Secure login and signup with Auth0.
- **GraphQL API:** Powerful and flexible API for data manipulation and querying.

## 🛠️ Tech Stack

- **Programming Language:** TypeScript
- **Frameworks & Libraries:**
  - Next.js
  - Apollo Server
  - Prisma
  - Ant Design
  - Mapbox GL
  - Leaflet
  - Tailwind CSS
- **Tools:**
  - ESLint
  - Prettier
  - Husky (for Git hooks)
  - Vercel (for deployment)

## 📦 Installation

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/lief_project.git

# Navigate to the project directory
cd lief_project

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

### Alternative Installation Methods

- **Docker:** [Dockerfile](Dockerfile)
- **Vercel:** Deploy directly from the Vercel dashboard

## 🎯 Usage

### Basic Usage

```typescript
// Example: Querying user data
import { gql, useQuery } from "@apollo/client";

const ME_QUERY = gql`
  query Me {
    me {
      id
      email
      name
      createdAt
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(ME_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.me;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

### Advanced Usage

- **Setting up Geofences:**

  ```typescript
  // Example: Setting up a geofence
  const perimeterData = [
    {
      key: "1",
      name: "Main Office",
      radius: 500,
      lat: 34.0522,
      lng: -118.2437,
      status: "Active",
    },
    // Add more perimeters as needed
  ];

  const handleAdd = () => {
    // Logic to add a new geofence
  };

  const handleEdit = (record) => {
    // Logic to edit an existing geofence
  };

  const handleDelete = (record) => {
    // Logic to delete a geofence
  };
  ```

## 📁 Project Structure

```
lief_project/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...auth0]/
│   │   │       └── route.ts
│   │   ├── graphql/
│   │   │   └── route.ts
│   │   └── ...
│   ├── components/
│   │   ├── auth-buttons.tsx
│   │   ├── footer.tsx
│   │   ├── loading.tsx
│   │   ├── logo.tsx
│   │   ├── user-profile.tsx
│   │   └── ...
│   ├── dashboard/
│   │   |___
│   │   │   |
│   │   | components/
│   │   │   ├── DistributionChart.tsx
│   │   │   ├── Map.tsx
│   │   │   ├── MetricCard.tsx
│   │   │   └── ...
│   │   ├── history/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── manager/
│   │   │   ├── analytics/
│   │   │   │   └── page.tsx
│   │   │   ├── perimeter/
│   │   │   │   └── page.tsx
│   │   │   ├── settings/
│   │   │   │   └── page.tsx
│   │   │   ├── staff/
│   │   │   │   └── page.tsx
│   │   │   └── ...
│   │   └── ...
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── components/
│   ├── providers.tsx
│   └── ...
├── graphql/
│   ├── resolver.ts
│   └── schema.ts
├── lib/
│   ├── apollo-client.ts
│   ├── auth0.ts
│   ├── prisma.ts
│   └── ...
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

## 🔧 Configuration

- **Environment Variables:** `.env.local`

  - `NEXT_PUBLIC_MAPTILER_API_KEY`: API key for Mapbox GL
  - `AUTH0_SCOPE`: Auth0 scope for authentication
  - `DATABASE_URL`: Database connection string

- **Configuration Files:** `next.config.ts`
  - Customize Next.js configuration

## 🤝 Contributing

- Fork the repository
- Create a new branch (`git checkout -b feature/your-feature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin feature/your-feature`)
- Create a new Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors & Contributors

- **Maintainers:** [Your Name]
- **Contributors:** [List of contributors]

## 🐛 Issues & Support

- Report issues on the [GitHub Issues page](https://github.com/yourusername/lief_project/issues)
- For support, contact [Your Email]

## 🗺️ Roadmap

- **Planned Features:**
  - Implement real-time notifications
  - Add support for multiple languages
  - Enhance geofencing with more advanced features
- **Future Improvements:**
  - Integrate with more third-party services
  - Improve performance and scalability

---

**Additional Guidelines:**

- Use modern markdown features (badges, collapsible sections, etc.)
- Include practical, working code examples
- Make it visually appealing with appropriate emojis
- Ensure all code snippets are syntactically correct for TypeScript
- Include relevant badges (build status, version, license, etc.)
- Make installation instructions copy-pasteable
- Focus on clarity and developer experience
