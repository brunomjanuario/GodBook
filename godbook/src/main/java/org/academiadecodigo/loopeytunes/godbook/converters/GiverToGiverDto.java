package org.academiadecodigo.loopeytunes.godbook.converters;

import org.academiadecodigo.loopeytunes.godbook.dto.GiverDto;
import org.academiadecodigo.loopeytunes.godbook.persistence.model.Givers;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class GiverToGiverDto implements Convert<GiverDto, Givers>{

  public GiverDto convert(Givers giver) {

    GiverDto giverDto = new GiverDto();

    giverDto.setId(giver.getId());
    giverDto.setName(giver.getName());
    giverDto.setPhoneNumber(giver.getPhoneNumber());
    giverDto.setEmail(giver.getEmail());
    giverDto.setAboutMe(giver.getAboutMe());
    giverDto.setImgUrl(giver.getImgUrl());
    giverDto.setCategory(giver.getCategory());
    giverDto.setSkills(giver.getSkills());
    giverDto.setExperiences(giver.getExperiences());
    giverDto.setLocation(giver.getLocation());
    giverDto.setAge(giver.getAge());
    giverDto.setUsername(giver.getUsername());
    giverDto.setPassword(giver.getPassword());

    return giverDto;
  }

  public List<GiverDto> convert(List<Givers> listToConvert) {

    return listToConvert.stream()
      .map(this::convert)
      .collect(Collectors.toList());
  }
}
