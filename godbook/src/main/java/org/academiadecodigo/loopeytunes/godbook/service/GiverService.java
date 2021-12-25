package org.academiadecodigo.loopeytunes.godbook.service;


import org.academiadecodigo.loopeytunes.godbook.persistence.dao.GiversDao;
import org.academiadecodigo.loopeytunes.godbook.persistence.model.Givers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GiverService implements ServiceInterface{

    private GiversDao giversDao;

    @Autowired
    public void setGiversDao(GiversDao giversDao) {
        this.giversDao = giversDao;
    }

    public List<Givers> getGivers() {
        return giversDao.findAll();
    }

    public Givers getGiver(int id) {
        return giversDao.findById(id).get();
    }

    public void deleteGiver(int id) {
        giversDao.deleteById(id);
    }

    public void addGiver(Givers giver) {
        giversDao.save(giver);
    }

    public void updateGiver(Givers giver) {
        giversDao.save(giver);
    }
}
