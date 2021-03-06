package com.onion.mongo

import com.onion.model.{Selection, Meeting}
import org.scalatest.FunSuite
import scala.concurrent.Await
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.duration._
import com.onion.util.OptionUtil._

/**
* Created by famo on 1/28/15.
*/
class MeetingDaoTest extends FunSuite{

  val selection = List(Selection("selectionId",123L,123L,"haha_address","123,456"))
  val meeting = Meeting("1423653476012-1869e220-a3ff-464a-937b-f62d76e00319","haha_city","1423653410583-ba9fa68f-2671-4643-b1a1-ee9e7bd8d17f","haha_subject","haha_description","haha_target_user",12.34,selection,List(),123L,123L,false)

  test("meeting dao test") {

    val meetingDao = DB.MeetingDao
    val result = meetingDao.add(meeting)
    Await.result(result, 100 days)
//    val result = meetingDao.update(meeting)
//    Await.result(result, 100 days)


//    val result2 = meetingDao.findById("0")
//    val result2 = meetingDao.findByCityId("haha_city")
//    println(Await.result(result2, 100 days))


  }
}
