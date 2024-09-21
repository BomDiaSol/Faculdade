package one.digitalinnovation.gof.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import one.digitalinnovation.gof.models.Cliente;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Long> {

}
