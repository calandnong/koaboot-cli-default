/**
 * Greated By xuanhei on 2020/9/6
 **/

const {Mapper,Select} = require('koabootjs').MapperAnnotation;

@Mapper
class IndexMapper {

    /**
     *  查询多条数据
     */
    @Select("select * from test")
    selectTest(){}
}
module.exports = IndexMapper;