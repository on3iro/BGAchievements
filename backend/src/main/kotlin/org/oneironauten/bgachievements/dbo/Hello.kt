package org.oneironauten.bgachievements.dbo

import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "hello")
data class Hello(@Id var id: Long, var message: String)

