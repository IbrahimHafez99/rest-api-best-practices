import { Express, Request, Response } from "express"
import { createrUserHandler } from "./controller/user.controller"
import validateResource from "./middleware/validateResource"
import { createUserSchema } from './schema/user.schema';
import { createSessionSchema } from "./schema/session.schema";
import { createrSessionHandler, deleteSessionHandler, getUserSessionsHandler } from "./controller/session.controller";
import { requireUser } from "./middleware/requireUser";
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from "./controller/product.controller";
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from "./schema/product.schema";

function routes(app: Express) {
  //session routes
  app.post('/api/users', validateResource(createUserSchema), createrUserHandler)
  app.post('/api/sessions', validateResource(createSessionSchema), createrSessionHandler)
  app.get('/api/sessions', requireUser, getUserSessionsHandler)
  app.delete('/api/sessions', requireUser, deleteSessionHandler)
  //product routes
  app.get('/api/products/:productId', [requireUser, validateResource(getProductSchema)], getProductHandler)
  app.put('/api/products/:productId', [requireUser, validateResource(updateProductSchema)], updateProductHandler)
  app.post('/api/products', [requireUser, validateResource(createProductSchema)], createProductHandler)
  app.delete('/api/products/:productId', [requireUser, validateResource(deleteProductSchema)], deleteProductHandler)

}

export default routes