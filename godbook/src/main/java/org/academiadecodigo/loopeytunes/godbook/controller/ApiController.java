package org.academiadecodigo.loopeytunes.godbook.controller;

import lombok.Setter;
import org.academiadecodigo.loopeytunes.godbook.converters.GiverDtoToGiver;
import org.academiadecodigo.loopeytunes.godbook.converters.GiverToGiverDto;
import org.academiadecodigo.loopeytunes.godbook.dto.GiverDto;
import org.academiadecodigo.loopeytunes.godbook.persistence.model.Givers;
import org.academiadecodigo.loopeytunes.godbook.service.GiverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class ApiController {

    private final GiverService giverService;
    private GiverDtoToGiver giverDtoToGiver;
    private GiverToGiverDto giverToGiverDto;

    @Autowired
    public ApiController(GiverService giverService, GiverDtoToGiver giverDtoToGiver, GiverToGiverDto giverToGiverDto) {
        this.giverService = giverService;
        this.giverDtoToGiver = giverDtoToGiver;
        this.giverToGiverDto = giverToGiverDto;
    }

    @CrossOrigin
    @GetMapping
    public List<GiverDto> getGivers() {
        return giverToGiverDto.convert(giverService.getGivers());
    }

    @CrossOrigin
    @GetMapping(path = "/{id}")
    public GiverDto getGiver(@PathVariable Integer id) {
        return giverToGiverDto.convert(giverService.getGiver(id));
    }

    @CrossOrigin
    @PostMapping
    public void addGiver(@RequestBody GiverDto giver) {
        giverService.addGiver(giverDtoToGiver.convert(giver));
    }

    @CrossOrigin
    @DeleteMapping(path = "/{id}")
    public void deleteGiver(@PathVariable Integer id) {
        giverService.deleteGiver(id);
    }

    @CrossOrigin
    @PutMapping(path = "/{id}")
    public void updateGiver(@RequestBody GiverDto giver, @PathVariable Integer id) {
        giver.setId(id);
        giverService.updateGiver(giverDtoToGiver.convert(giver));
    }

}
