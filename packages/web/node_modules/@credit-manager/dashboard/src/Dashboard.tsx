import {Button} from "@credit-manager/ui";


const Dashboard = () => {
  return (
    <div>
      <h1>Hello</h1>
          <Button
            size="lg"
            className="rounded-2xl shadow-md"
          >
            Get Started 
          </Button>

          <div className="bg-red-500  text-foreground p-6 rounded-lg">
  Now Tailwind works 🎉
</div>

  <button className="flex items-center bg-blue-500 px-4 py-3 text-white hover:bg-blue-400">I am Tailwind</button>

    </div>
  );
}

export default Dashboard;
