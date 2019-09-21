/*! grafana - v4.3.2 - 2017-05-31
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","moment","test/specs/helpers","../datasource"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){c.describe("MySQLDatasource",function(){var a=new e.default.ServiceTestContext,b={name:"mysql"};c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(a.providePhase(["backendSrv"])),c.beforeEach(c.angularMocks.inject(function(c,d,e,g){a.$q=c,a.$httpBackend=e,a.$rootScope=d,a.ds=g.instantiate(f.MysqlDatasource,{instanceSettings:b}),e.when("GET",/\.html$/).respond("")})),c.describe("When performing annotationQuery",function(){var b,e="MyAnno",f={annotation:{name:e,rawQuery:"select time_sec, title, text, tags from table;"},range:{from:d.default(1432288354),to:d.default(1432288401)}},g={results:{MyAnno:{refId:e,tables:[{columns:[{text:"time_sec"},{text:"title"},{text:"text"},{text:"tags"}],rows:[[1432288355,"aTitle","some text","TagA,TagB"],[1432288390,"aTitle2","some text2"," TagB , TagC"],[1432288400,"aTitle3","some text3"]]}]}}};c.beforeEach(function(){a.backendSrv.datasourceRequest=function(b){return a.$q.when({data:g,status:200})},a.ds.annotationQuery(f).then(function(a){b=a}),a.$rootScope.$apply()}),c.it("should return annotation list",function(){c.expect(b.length).to.be(3),c.expect(b[0].title).to.be("aTitle"),c.expect(b[0].text).to.be("some text"),c.expect(b[0].tags[0]).to.be("TagA"),c.expect(b[0].tags[1]).to.be("TagB"),c.expect(b[1].tags[0]).to.be("TagB"),c.expect(b[1].tags[1]).to.be("TagC"),c.expect(b[2].tags.length).to.be(0)})})})}}});