package com.chillguy.fptuproject.service;

import java.util.List;

public interface ActorService {

    void addActor(Object actor);

    void updateActor(Object actor);

    void deleteActor(int accountId);

    List<Object> getAllActors();

}
