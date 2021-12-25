package org.academiadecodigo.loopeytunes.godbook.converters;

import org.academiadecodigo.loopeytunes.godbook.dto.GiverDto;
import org.academiadecodigo.loopeytunes.godbook.persistence.model.Givers;

import java.util.List;

public interface Convert<T,K>{

  public List<T> convert(List<K> listToConvert);
}
