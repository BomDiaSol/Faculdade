package me.dio.santader_dev_week_2023.service.impl;

import org.springframework.stereotype.Service;

import jakarta.persistence.NoResultException;
import me.dio.santader_dev_week_2023.models.User;
import me.dio.santader_dev_week_2023.repository.UserRepository;
import me.dio.santader_dev_week_2023.service.UserService;

@Service
public class UserServiceImpl implements UserService{

    private  final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).orElseThrow(NoResultException::new);

    }

    @Override
    public User createUser(User userToCreate) {
        if(userRepository.existsByAccountNumber(userToCreate.getAccount().getNumber())){
            throw new IllegalArgumentException("This account number already exists");
        }

        return userRepository.save(userToCreate);

    }

}
