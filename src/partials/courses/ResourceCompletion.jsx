import React from "react";

import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

function D326card2() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-bold text-3xl text-slate-800 dark:text-slate-100">
          Resource Completion
        </h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start"></div>
        <div className="text-1xl text-slate-800 dark:text-slate-100 mr-2 mt-2">
          <Card className="bg-transparent">
            <List>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-react"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="vertical-list-react"
                      ripple={false}
                      className="h-5 w-5 rounded-full transition-all hover:scale-105 hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="flex justify-end font-medium">
                    Practice Exam #1
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-vue"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="vertical-list-vue"
                      ripple={false}
                      className="h-5 w-5 rounded-full transition-all hover:scale-105 hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Practice Exam #2
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-svelte"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="vertical-list-svelte"
                      ripple={false}
                      className="h-5 w-5 rounded-full transition-all hover:scale-105 hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Practice Exam #3
                  </Typography>
                </label>
              </ListItem>
            </List>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default D326card2;
