package me.dio.santader_dev_week_2023.service;

import me.dio.santader_dev_week_2023.models.User;

public interface UserService {

    User findById(Long id);
    User createUser(User userToCreate);
}
