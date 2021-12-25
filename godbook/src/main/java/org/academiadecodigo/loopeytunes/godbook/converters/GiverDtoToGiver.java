package org.academiadecodigo.loopeytunes.godbook.converters;

import org.academiadecodigo.loopeytunes.godbook.dto.GiverDto;
import org.academiadecodigo.loopeytunes.godbook.persistence.model.Givers;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class GiverDtoToGiver implements Convert<Givers, GiverDto>{

  public Givers convert(GiverDto giverDto) {

    Givers giver = new Givers();

    giver.setId(giverDto.getId());
    giver.setName(giverDto.getName());
    giver.setPhoneNumber(giverDto.getPhoneNumber());
    giver.setEmail(giverDto.getEmail());
    giver.setAboutMe(giverDto.getAboutMe());
    giver.setImgUrl(giverDto.getImgUrl());
    giver.setCategory(giverDto.getCategory());
    giver.setSkills(giverDto.getSkills());
    giver.setExperiences(giverDto.getExperiences());
    giver.setLocation(giverDto.getLocation());
    giver.setAge(giverDto.getAge());
    giver.setUsername(giverDto.getUsername());
    giver.setPassword(giverDto.getPassword());

    return giver;
  }

  public List<Givers> convert(List<GiverDto> listToConvert) {

    return listToConvert.stream()
      .map(this::convert)
      .collect(Collectors.toList());
  }
}
