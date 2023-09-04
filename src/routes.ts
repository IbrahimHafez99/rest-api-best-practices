import { Express, Request, Response } from "express"
import { createrUserHandler } from "./controller/user.controller"
import validateResource from "./middleware/validateResource"
import { createUserSchema } from './schema/user.schema';
import { createSessionSchema } from "./schema/session.schema";
import { createrSessionHandler, deleteSessionHandler, getUserSessionsHandler } from "./controller/session.controller";
import { requireUser } from "./middleware/requireUser";

function routes(app: Express) {

  app.post('/api/users', validateResource(createUserSchema), createrUserHandler)
  app.post('/api/sessions', validateResource(createSessionSchema), createrSessionHandler)
  app.get('/api/sessions', requireUser, getUserSessionsHandler)
  app.delete('/api/sessions', requireUser, deleteSessionHandler)

}

export default routes