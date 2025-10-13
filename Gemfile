source "https://rubygems.org"

# GitHub Pages
gem "github-pages", "~> 228", group: :jekyll_plugins

# Additional plugins that work with GitHub Pages
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
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

# Ruby 3.4+ compatibility
gem "csv"
gem "bigdecimal"