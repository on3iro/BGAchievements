package org.oneironauten.bgachievements.controllers

import org.oneironauten.bgachievements.dbo.Hello
import org.oneironauten.bgachievements.repositories.HelloRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloController {

    @Autowired
    lateinit var helloRepository: HelloRepository

    @CrossOrigin()
    @RequestMapping("/hello")
    fun messages(): MutableList<Hello> = helloRepository.findAll()

}
