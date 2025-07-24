
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/react-app/components/ui/card";

const BlogPage = () => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">ZoneRight Blog</h1>
        <p className="text-muted-foreground">
          Tips, insights, and updates from the ZoneRight team
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            We're preparing helpful content about heart rate training, fitness tips, and app updates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Check back soon for articles on maximizing your training efficiency with heart rate zone coaching.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPage;