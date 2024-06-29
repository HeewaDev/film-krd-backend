import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class MyElasticsearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async searchFilms(query: string) {
    const { body }: any = await this.elasticsearchService.search({
      index: 'films',
      body: {
        query: {
          multi_match: {
            query: query,
            fields: ['title^3', 'genre'],
          },
        },
      },
    });

    return body.hits.hits.map(hit => hit._source);
  }
}
