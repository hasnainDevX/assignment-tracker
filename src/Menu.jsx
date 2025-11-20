import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

const Menu = () => {
  return (
    <div className="w-full px-12 py-8">
      <div className="flex">
        <div className="alert w-1/2">
          <Alert variant="destructive" className="border-red-400 bg-red-50">
            <AlertCircleIcon />
            <AlertTitle>You have 3 Upcoming Assignemnts Next Day</AlertTitle>
            <AlertDescription>
              <ul>
                <li>DLD</li>
                <li>MATHS</li>
                <li>ITC</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
        <div className="addbutton"></div>
      </div>
    </div>
  );
};

export default Menu;
