import AppDataSource from "../../db.js";

function buscarTodas() {
    return AppDataSource.query('SELECT * FROM bebidas')
}

function buscarUma(id) {
    return AppDataSource.query('SELECT * FROM bebidas WHERE id = ?', [id])
}

function buscarNome(bebidas) {
    return AppDataSource.query('SELECT * FROM bebidas WHERE bebidas = ?', [bebidas])
}

function inserir(bebidas, preço) {
    return AppDataSource.query('INSERT INTO bebidas (bebidas, preço) VALUES (?, ?)', [bebidas, preço])
}

function alterar(id, bebidas, preço) {
    return AppDataSource.query('UPDATE bebidas SET bebidas = ?, preço = ? WHERE id = ?', [bebidas, preço, id])
}

function deletar(id) {
    return AppDataSource.query('DELETE FROM bebidas WHERE id = ?', [id])
}
export { buscarTodas, buscarUma, inserir, alterar, deletar, buscarNome };