import {FilterOperator, Order, QueryHelper} from "../src/query_helper";

describe('Query helper', () => {
   it('should convert limit correctly', () => {
      let query = {
          limit: 100
      };
      expect(QueryHelper.convertSchema(query)).toBe('{"$limit":100}');
   });
   it('should convert skip correctly', () => {
      let query = {
         skip: 100
      };
      expect(QueryHelper.convertSchema(query)).toBe('{"$skip":100}');
   });
   it('should convert filter correctly', () => {
      let query = {
         filter: {
            id: {
               [FilterOperator.GT]: 100
            }
         }
      };
      expect(QueryHelper.convertSchema(query)).toBe('{"$filter":{"id":{"$gt":100}}}');
   });
   it('should order by filter correctly', () => {
      let query = {
         orderBy: {
            id: Order.ASC
         }
      };
      expect(QueryHelper.convertSchema(query)).toBe('{"$order_by":{"id":"asc"}}');
   });

   it('should convert query with all parameters correctly', () => {
      let query = {
         limit: 100,
         skip: 20,
         orderBy: {
            id: Order.ASC
         },
         filter: {
            id: {
               [FilterOperator.GT]: 100
            }
         }
      };
      expect(QueryHelper.convertSchema(query)).toBe(
          '{"$filter":{"id":{"$gt":100}},"$limit":100,"$skip":20,"$order_by":{"id":"asc"}}'
      );
   });
});