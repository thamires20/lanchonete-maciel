import { buscarTodas, buscarUma, inserir, alterar, deletar, buscarNome } from "../Services/bebidasService.js";

async function buscarTodasBebidas(req, res) {
    let json = { error: '', result: [] }

    let cardapio = await buscarTodas()

    for (let i in cardapio) {
        json.result.push({
            id: cardapio[i].id,
            bebidas: cardapio[i].bebidas,
            preço: cardapio[i].preço

        })
    }
    res.json(json)
}

async function buscarUmaBebida(req, res) {
    const id = req.params.id
    const cardapio = await buscarUma(id)
    if (!cardapio.length) {
        return res.status(404).json({ message: "Bebida não encontrada" })
    }
    return res.json(cardapio[0])
}

async function inserirBebida(req, res) {
    let json = { error: '', result: {} }

    let bebidas = req.body.bebidas
    let preço = req.body.preço

    if (bebidas && preço) {
        let bebidasId = await inserir(bebidas, preço)
        json.result = {
            id: bebidasId,
            preço
        }
    } else {
        json.error = 'Campos não enviados'
    }

    res.json(json);
}

async function alterarBebida(req, res) {
    let json = { error: '', result: {} }

    let idBebida = req.params.id
    let bebidas = req.body.bebidas
    let preço = req.body.preço

    if (idBebida && bebidas && preço) {
        await alterar(idBebida, bebidas, preço,)
        json.result = {
            idBebida,
            bebidas,
            preço
        }
    } else {
        json.error = 'Campos não enviados'

    }
    res.json(json)
}

async function deletarBebida(req, res) {
    let json = 'item deletado com sucesso'

    await deletar(req.params.id)

    res.json(json);
}

async function buscarBebidaPorNome(req, res) {
    let bebidas = req.params.bebidas
    const cardapio = await buscarNome(bebidas)
    if (!cardapio.length) {
        return res.status(404).json({ message: "Bebida não encontrado" })
    }
    return res.json(cardapio[0])
}

export { buscarTodasBebidas, buscarUmaBebida, inserirBebida, alterarBebida, deletarBebida, buscarBebidaPorNome }