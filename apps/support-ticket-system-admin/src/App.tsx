import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ReplyList } from "./reply/ReplyList";
import { ReplyCreate } from "./reply/ReplyCreate";
import { ReplyEdit } from "./reply/ReplyEdit";
import { ReplyShow } from "./reply/ReplyShow";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { AttachmentList } from "./attachment/AttachmentList";
import { AttachmentCreate } from "./attachment/AttachmentCreate";
import { AttachmentEdit } from "./attachment/AttachmentEdit";
import { AttachmentShow } from "./attachment/AttachmentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Support Ticket System"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Reply"
          list={ReplyList}
          edit={ReplyEdit}
          create={ReplyCreate}
          show={ReplyShow}
        />
        <Resource
          name="Ticket"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
          show={TicketShow}
        />
        <Resource
          name="Attachment"
          list={AttachmentList}
          edit={AttachmentEdit}
          create={AttachmentCreate}
          show={AttachmentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
