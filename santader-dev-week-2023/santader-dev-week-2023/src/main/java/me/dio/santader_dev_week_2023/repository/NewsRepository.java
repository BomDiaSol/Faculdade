package me.dio.santader_dev_week_2023.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import me.dio.santader_dev_week_2023.models.News;

@Repository
public interface NewsRepository extends JpaRepository <News, Long>{

}
