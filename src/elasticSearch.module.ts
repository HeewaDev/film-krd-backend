import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { MyElasticsearchService } from './elasticSearch.service';


@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200', // Elasticsearch node URL
    }),
  ],
  providers: [MyElasticsearchService], // 
  exports: [ElasticsearchModule], // Export ElasticsearchModule used by other modules
})
export class MyElasticsearchModule {}
