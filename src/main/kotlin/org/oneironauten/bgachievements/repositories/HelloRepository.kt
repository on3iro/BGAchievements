package org.oneironauten.bgachievements.repositories

import org.oneironauten.bgachievements.dbo.Hello
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface HelloRepository : JpaRepository<Hello, Long>{
}