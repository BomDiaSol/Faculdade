package one.digitalinnovation.gof.service;

import org.bouncycastle.util.Iterable;

import one.digitalinnovation.gof.models.Cliente;

public interface ClienteService {

    Iterable<Cliente> buscarTodos();
    Cliente buscarClientePorId(Long id);
    void inserirCliente (Cliente cliente);
    void atualizarCliente (Long id, Cliente cliente);
    void deletarCliente(Long id);

}
