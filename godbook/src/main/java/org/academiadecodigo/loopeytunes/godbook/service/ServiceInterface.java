package org.academiadecodigo.loopeytunes.godbook.service;

import org.academiadecodigo.loopeytunes.godbook.persistence.model.Givers;

import java.util.List;

public interface ServiceInterface {

  List<Givers> getGivers();
  Givers getGiver(int id);
  void deleteGiver(int id);
  void addGiver(Givers giver);
  void updateGiver(Givers giver);
}
