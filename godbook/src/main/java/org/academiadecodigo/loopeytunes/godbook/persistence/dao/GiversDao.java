package org.academiadecodigo.loopeytunes.godbook.persistence.dao;

import org.academiadecodigo.loopeytunes.godbook.persistence.model.Givers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GiversDao extends JpaRepository<Givers, Integer> {
}
