import { Router } from "express";
import { buscarTodasBebidas, buscarUmaBebida, inserirBebida, alterarBebida, deletarBebida, buscarBebidaPorNome } from "../Controllers/bebidasController.js";
const bebidaRouter = Router();

bebidaRouter.get('/bebidas', buscarTodasBebidas)
bebidaRouter.get('/bebida/:id', buscarUmaBebida)
bebidaRouter.get('/bebidas/:bebidas', buscarBebidaPorNome)
bebidaRouter.post('/bebida', inserirBebida)
bebidaRouter.put('/bebida/:id', alterarBebida)
bebidaRouter.delete('/bebida/:id', deletarBebida)



export { bebidaRouter }