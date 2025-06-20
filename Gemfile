source "https://rubygems.org"

# Jekyll for static site generation
gem "jekyll", "~> 4.3.0"

# Jekyll plugins
group :jekyll_plugins do
  # GitHub Pages compatible plugins
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
  
  # Asset optimization
  gem "jekyll-sass-converter", "~> 3.0"
  gem "jekyll-minifier", "~> 0.1"
  
  # Image handling
  # gem "jekyll-responsive-image", "~> 1.6" # Temporarily disabled - requires ImageMagick
  
  # Additional functionality
  gem "jekyll-archives", "~> 2.2"
  gem "jekyll-paginate-v2", "~> 3.0"
end

# Windows and JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Development tools
group :development do
  gem "webrick", "~> 1.8"
end