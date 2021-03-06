@extends('app')

@section('content')
    <br>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="panel panel-light">
                    <div class="panel-heading">
                        Categories
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-xs-12">
                                @foreach($tags as $tag)
                                    <div class="panel-link-wide">
                                        <a class="text-link" href="{{ route('home', [$tag->slug]) }}">{{ $tag->name }}</a>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-xs-12 text-center">
                {!! $tags->render() !!}
            </div>
        </div>
    </div>
@endsection