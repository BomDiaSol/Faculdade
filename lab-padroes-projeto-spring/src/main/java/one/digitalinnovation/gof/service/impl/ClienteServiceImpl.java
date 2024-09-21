package one.digitalinnovation.gof.service.impl;

import org.apache.el.stream.Optional;
import org.bouncycastle.util.Iterable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import one.digitalinnovation.gof.models.Cliente;
import one.digitalinnovation.gof.models.Endereco;
import one.digitalinnovation.gof.repository.ClienteRepository;
import one.digitalinnovation.gof.repository.EnderecoRepository;
import one.digitalinnovation.gof.service.ClienteService;
import one.digitalinnovation.gof.service.ViaCepService;

@Service
public class ClienteServiceImpl implements ClienteService{

    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private EnderecoRepository enderecoRepository;
    @Autowired
    private ViaCepService viaCepService;

    @Override
    public Iterable<Cliente> buscarTodos(){
        return (Iterable<Cliente>) clienteRepository.findAll();
    }

    @Override
    public Cliente buscarClientePorId(Long id) {
        Optional<Cliente> cliente = clienteRepository.findAll(id);
        return cliente.get();
    }

    @Override
    public void inserirCliente(Cliente cliente){
        String cep = cliente.getEndereco().getCep();
        Endereco endereco = enderecoRepository.findById(cep).orElseGet(() -> {
            Endereco novoEndereco = ViaCepService.consultarCep(cep);
            enderecoRepository.save(novoEndereco);
            return novoEndereco;

        });

        cliente.setEndereco(endereco);
        clienteRepository.save(Cliente);
    }

    @Override
    public void atualizarCliente(Long id, Cliente cliente){
        Optional<Cliente> clienteBd = clienteRepository.findAllById(id);
        if(clienteBd.isPresent()){
            inserirCliente(cliente);
        }
    }

    @Override
    public void deletarCliente(Long id){
        clienteRepository.deleteAllById(id);
    }




}
